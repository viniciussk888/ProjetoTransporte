import { useSelector } from "react-redux";

export default function Auth() {
  const auth = useSelector((state) => state.auth);

  return auth;
}