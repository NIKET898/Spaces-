import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, Phone, MapPin, User, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    alternate: "",
    address: "",
    state: "",
    pincode: ""
  });
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, mobile, address, state, pincode } = formData;
    
    if (!name.trim()) {
      toast.error("Please enter your full name");
      return false;
    }
    if (!mobile.trim() || mobile.length < 10) {
      toast.error("Please enter a valid mobile number");
      return false;
    }
    if (!address.trim()) {
      toast.error("Please enter your address");
      return false;
    }
    if (!state.trim()) {
      toast.error("Please enter your state");
      return false;
    }
    if (!pincode.trim() || pincode.length < 6) {
      toast.error("Please enter a valid pincode");
      return false;
    }
    
    return true;
  };

  const handleProceed = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Build WhatsApp message with better formatting
      const orderMessage = `🛍️ *New EyeWear Order*

👤 *Customer Details:*
Name: ${formData.name}
📱 Mobile: ${formData.mobile}
${formData.alternate ? `📞 Alternate: ${formData.alternate}` : ''}

📍 *Delivery Address:*
${formData.address}
${formData.state}, ${formData.pincode}

🕶️ *Order Items:*
${items.map(item => `• ${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}`).join('\n')}

💰 *Total Amount: ₹${total.toFixed(2)}*

Please confirm this order. Thank you! 🙏`;

      const encodedMessage = encodeURIComponent(orderMessage);
      const whatsappNumber = "919403403106"; // Added country code

      // Open WhatsApp in a new tab
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

      // Show success dialog
      setIsDialogOpen(true);

      // Clear cart
      clearCart();
      
      toast.success("Order sent successfully via WhatsApp!");
    } catch (error) {
      toast.error("Failed to send order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    navigate("/");
  };

  // If cart is empty, show empty state
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some glasses to your cart before checking out.</p>
            <Button onClick={() => navigate('/')} className="w-full">
              Continue Shopping
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your order details below</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Details Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Shipping Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </Label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Enter your full name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Mobile Number *
                      </Label>
                      <Input 
                        id="mobile"
                        name="mobile"
                        placeholder="10-digit mobile number" 
                        type="tel" 
                        maxLength={10}
                        value={formData.mobile} 
                        onChange={handleInputChange}
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="alternate">Alternate Number</Label>
                      <Input 
                        id="alternate"
                        name="alternate"
                        placeholder="Optional alternate number" 
                        type="tel" 
                        maxLength={10}
                        value={formData.alternate} 
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Complete Address *</Label>
                    <Textarea 
                      id="address"
                      name="address"
                      placeholder="Enter your complete address with landmarks" 
                      rows={3}
                      value={formData.address} 
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input 
                        id="state"
                        name="state"
                        placeholder="Enter your state" 
                        value={formData.state} 
                        onChange={handleInputChange}
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input 
                        id="pincode"
                        name="pincode"
                        placeholder="6-digit pincode" 
                        type="text"
                        maxLength={6}
                        value={formData.pincode} 
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-blue-800">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        Your order will be sent via WhatsApp for quick confirmation
                      </span>
                    </div>
                  </div>

                  <Button 
                    type="button" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white" 
                    size="lg"
                    onClick={handleProceed}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending Order...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Order via WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {items.map(item => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <img
                        src={item.image || "/placeholder-glasses.jpg"}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            Qty: {item.quantity}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Items ({items.length})</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Delivery</span>
                    <span className="text-green-600 font-medium">FREE</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-600">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-xs font-medium">
                    🎉 Free delivery on all orders!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-sm mx-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-600" />
              Order Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-center pt-4">
              Your order has been sent via WhatsApp. We'll contact you shortly to confirm your order details.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <DialogClose asChild>
              <Button onClick={handleCloseDialog} className="w-full">
                Continue Shopping
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}