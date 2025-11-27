import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function DialogDemo({ image }: { image: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={image}
          alt="Project Image"
          width={100}
          height={100}
          className="object-cover rounded-xl"
        />
        {/* <Button variant="outline" size="icon">Open</Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-100" showCloseButton= {false}>
        <DialogHeader className="hidden">
          <DialogTitle>Hình ảnh dự án</DialogTitle>
        </DialogHeader>
        <Image src={image} alt="Dialog Image" fill/>
      </DialogContent>
    </Dialog>
  );
}
