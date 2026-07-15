import { useLocation } from "react-router-dom";

export function useNavScroll() {
  const location = useLocation();

  return (targetPath: string, callback?: () => void) => {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (callback) {
        callback();
      }

      // If the user clicks a link to the page they are already on,
      // prevent the default routing and manually scroll to top smoothly.
      if (location.pathname === targetPath) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  };
}
