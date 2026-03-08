import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import { HospitalDetail } from "./pages/HospitalDetail";
import { HowItWorks } from "./pages/HowItWorks";
import { TravelGuide } from "./pages/TravelGuide";
import { About } from "./pages/About";
import { HelpDesk } from "./pages/HelpDesk";
import { Hospitals } from "./pages/Hospitals";
import { Doctors } from "./pages/Doctors";
import { AdminEnquiries } from "./pages/AdminEnquiries";
import { Callback } from "./pages/Callback";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "results", Component: Results },
      { path: "hospital/:id", Component: HospitalDetail },
      { path: "how-it-works", Component: HowItWorks },
      { path: "travel-guide", Component: TravelGuide },
      { path: "about", Component: About },
      { path: "help-desk", Component: HelpDesk },
      { path: "hospitals", Component: Hospitals },
      { path: "doctors", Component: Doctors },
      { path: "admin/enquiries", Component: AdminEnquiries },
      { path: "callback", Component: Callback },
    ],
  },
]);
