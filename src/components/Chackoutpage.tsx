import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [alternate, setAlternate] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProceed = () => {
    if (!name || !mobile || !address || !state || !pincode) {
      alert("Please fill all required fields!");
      return;
    }

    // Build WhatsApp message
    const orderMessage = `
*New Order*
Name: ${name}
Mobile: ${mobile}
Alternate: ${alternate || "-"}
Address: ${address}, ${state}, ${pincode}
Items:
${items.map(item => `- ${item.name} x${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`).join("\n")}
Total: ₹${total.toFixed(2)}
`;

    const encodedMessage = encodeURIComponent(orderMessage);
    const whatsappNumber = "9403403106";

    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

    // Show success dialog
    setIsDialogOpen(true);

    // Clear cart if you want
    clearCart();
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    navigate("/"); // Redirect to home
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Buyer Details Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <Input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
            <Input placeholder="Mobile Number" type="tel" value={mobile} onChange={e => setMobile(e.target.value)} required />
            <Input placeholder="Alternate Number" type="tel" value={alternate} onChange={e => setAlternate(e.target.value)} />
            <Textarea placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required />
            <Input placeholder="State" value={state} onChange={e => setState(e.target.value)} required />
            <Input placeholder="Pincode" type="number" value={pincode} onChange={e => setPincode(e.target.value)} required />
            <Button type="button" className="w-full bg-yellow-500 hover:bg-yellow-600" onClick={handleProceed}>
              Proceed to Order
            </Button>
          </form>
        </div>

        {/* Cart Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="space-y-4">
            {items.length > 0 ? (
              items.map(item => (
                <div key={item.id} className="flex justify-between border p-3 rounded-md">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Your cart is empty</p>
            )}
          </div>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-yellow-600">₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle>Order Placed Successfully!</DialogTitle>
            <DialogDescription>
              Your order has been sent via WhatsApp. Click the cross to go back to home.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <DialogClose asChild>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
