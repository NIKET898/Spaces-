import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Reset link sent!",
        description: "Check your email for the password reset link",
      });
      setIsLoading(false);
      navigate("/login");
    }, 1500);
  };

  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-3xl shadow-xl w-full max-w-md p-8 relative animate-fadeInUp">
        <button
          onClick={() => navigate("/")}
          className="absolute right-4 top-4 rounded-full p-2 hover:bg-accent transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">
              Enter your email to reset password
            </h2>
          </div>

          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="reset-email"
                className="text-sm font-medium uppercase text-muted-foreground"
              >
                Email
              </Label>
              <Input
                id="reset-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="rounded-full"
                disabled={isLoading}
                autoFocus
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full h-12 text-base"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Reset password"}
            </Button>
          </form>

          <div className="text-center">
            <button
              onClick={handleCancel}
              className="text-primary hover:underline font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
