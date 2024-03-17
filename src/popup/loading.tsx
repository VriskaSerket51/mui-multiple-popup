import { Backdrop } from "@mui/material";
import { useLoadingStore } from "@/popup/hooks";
import Spinner from "@/basics/Spinner";

export function LoadingComponent() {
  const { isLoading, text } = useLoadingStore();

  return (
    <Backdrop
      open={isLoading}
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        zIndex: 10000,
      }}
    >
      <Spinner text={text} />
    </Backdrop>
  );
}
