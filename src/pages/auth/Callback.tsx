import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useConvexAuth, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { Spinner } from "@/components/ui/spinner.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function AuthCallback() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useConvexAuth();
  const updateCurrentUser = useMutation(api.users.updateCurrentUser);

  const navigateHome = useCallback(
    () => navigate("/", { replace: true }),
    [navigate],
  );

  useEffect(() => {
    // If Convex is finished loading and is authenticated, sync the user and go home
    if (!isLoading && isAuthenticated) {
      updateCurrentUser()
        .then(() => navigateHome())
        .catch((err) => console.error("Sync failed:", err));
    } else if (!isLoading && !isAuthenticated) {
      // If not loading and not authenticated, they shouldn't be here
      navigateHome();
    }
  }, [isLoading, isAuthenticated, updateCurrentUser, navigateHome]);

  // We can still show an error state if needed, though standard Convex 
  // usually handles errors via the login provider (Clerk/Auth0)
  return (
    <div className="flex flex-col items-center justify-center h-svh gap-4">
      <Spinner className="size-8" />
      <p className="text-sm text-muted-foreground text-center">
        {isLoading ? "Verifying session..." : "Syncing account..."}
      </p>
    </div>
  );
}
