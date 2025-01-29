import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface PurchaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  carDetails: {
    make: string;
    model: string;
    price: number;
  };
}

const PurchaseDialog = ({ isOpen, onClose, carDetails }: PurchaseDialogProps) => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleContinue = () => {
    if (step === 1) {
      toast({
        title: "Please sign in",
        description: "You need to sign in to continue with the purchase.",
        duration: 3000,
      });
      setStep(2);
    } else {
      // Handle purchase logic here
      toast({
        title: "Purchase initiated",
        description: "A representative will contact you shortly.",
        duration: 3000,
      });
      onClose();
      setStep(1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Purchase {carDetails.make} {carDetails.model}</DialogTitle>
          <DialogDescription>
            {step === 1 ? (
              `The price for this vehicle is $${carDetails.price.toLocaleString()}`
            ) : (
              "Please sign in to continue with your purchase"
            )}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button onClick={handleContinue}>
            {step === 1 ? "Continue Purchase" : "Sign In"}
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseDialog;