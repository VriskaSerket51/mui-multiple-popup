import { useEffect } from "react";

import { closeAll, useDialogContainerStore } from "@/popup/hooks";
import { DialogComponent } from "@/popup/dialog";

export function DialogContainer() {
  const { dialogs } = useDialogContainerStore();

  useEffect(() => {
    closeAll();
  }, []);

  return (
    <>
      {dialogs.map((dialog) => {
        const { id, isOpened, title, content, onYes, onNo, onCancel, close } =
          dialog;

        return (
          <DialogComponent
            key={id}
            isOpened={isOpened}
            title={title}
            content={content}
            onYes={onYes}
            onNo={onNo}
            onCancel={onCancel}
            close={close}
          />
        );
      })}
    </>
  );
}
