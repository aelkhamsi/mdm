import { BuyMeACoffee } from "@mdm/ui";

export default function Footer() {
  return (
    <footer className="border-grid border-t py-6 md:px-8 md:py-0">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              shadcn
            </a>
            . The source code is available on{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
    // <div className="absolute w-full py-5 text-center">
    //   <p className="text-gray-500">
    //     A project by{" "}
    //     <a
    //       className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
    //       href="https://twitter.com/steventey"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Steven Tey
    //     </a>
    //   </p>
    //   <a
    //     href="https://www.buymeacoffee.com/steventey"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     className="mx-auto mt-2 flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-6 py-2 transition-all duration-75 hover:scale-105"
    //   >
    //     <BuyMeACoffee className="h-6 w-6" />
    //     <p className="font-medium text-gray-600">Buy me a coffee</p>
    //   </a>
    // </div>
  );
}
