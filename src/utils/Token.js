import { useSelector } from "react-redux";

export default function Token() {
  const config = {
    headers: {
      Authorization: `Bearer ${useSelector((state) => state.token)}`
    },
  };

  return config;
}