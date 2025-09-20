import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./Chackoutpage";


<Router>
  <Routes>
    {/* Other routes */}
    <Route path="/checkout" element={<CheckoutPage />} />
  </Routes>
</Router>
