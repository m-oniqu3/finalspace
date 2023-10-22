import { toast } from "sonner";

export const notify = {
  style: {
    backgroundColor: "rgb(199 210 254)",
    borderColor: "rgb(129 140 248)",
  },

  verify() {
    toast.message("Email Verification", {
      description:
        "We've sent you an email to verify your account. Please click the link in the email to continue.",
      dismissible: true,
      style: this.style,
    });
  },
  welcome() {
    setTimeout(() => {
      toast.message("Chookity!", {
        description: "That's Mooncake for welcome to Final Space.",
        dismissible: true,
        style: this.style,
      });
    }, 3000);
  },

  error(error: any) {
    toast.message("Authentication Error", {
      description: error.message + ". Please try again.",
      dismissible: true,
      style: this.style,
    });
  },
};
