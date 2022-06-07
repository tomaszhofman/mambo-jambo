import Showcase from "../components/Showcase/Showcase";

enum Routes {
  LandingPage = "landingpage",
  About = "about",
  Contact = "contact",
  Showcase = "showcase",
}

export const routes = {
  LandingPage: `/${Routes.LandingPage}`,
  About: `/${Routes.About}`,
  Contact: `/${Routes.Contact}`,
  Showcase: `/${Routes.Showcase}`,
};
