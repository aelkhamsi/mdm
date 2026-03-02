import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  LoadingDots,
  toast,
} from "@mdm/ui";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export function ReminderEmailButton({
  name,
  sendEmails,
}: {
  name: string;
  sendEmails: Function;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSend = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    const response = (await sendEmails()) as any;

    switch (response?.statusCode) {
      case 200:
        toast({
          title: "✅ Emails were sent successfully",
          description: `Emails for DRAFT application of ${name} were sent successfully`,
        });
        break;

      default:
        toast({
          title: "❌ An error has occured. Please try again later",
          description: `Emails for DRAFT application of ${name} failed`,
        });
        break;
    }

    setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="ml-auto hidden h-8 lg:flex"
        onClick={() => setOpen(true)}
      >
        <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
        Send {name} Reminder
      </Button>

      <AlertDialog open={open}>
        <AlertDialogContent className="w-full xl:w-1/3">
          <AlertDialogHeader>
            <AlertDialogTitle>Send {name} Reminder</AlertDialogTitle>

            <AlertDialogDescription>
              You&apos;ll be sending an email to users that have a{" "}
              <span className="font-bold">DRAFT</span> {name} application.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Close
            </AlertDialogCancel>
            <AlertDialogAction onClick={onSend}>
              {!loading ? (
                <span>Send Emails</span>
              ) : (
                <LoadingDots color="#808080" />
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
