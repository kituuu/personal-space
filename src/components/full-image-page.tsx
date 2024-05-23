import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

const FullPageImageView = async (props: { id: number }) => {
  const image = await getImage(props.id);
  // getting the uploader info as image has only userId
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0 flex-row justify-between">
      <div className="flex h-full w-full flex-shrink items-center justify-center">
        <img src={image.url} className="h-full flex-shrink object-contain" />
      </div>
      <div className="flex w-56 flex-shrink-0 flex-col border-[1px]">
        <div className="border-b-[1px] p-3 text-center text-lg font-bold">
          {image.name}
        </div>
        <div className="flex flex-col gap-1 p-2">
          <span>Uploaded by:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col gap-1 p-2">
          <span>Created on:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col gap-1 p-2">
          {/* form to make it work without javascript */}
          <form
            action={async () => {
              "use server";
              await deleteImage(props.id);
            }}
          >
            <Button type="submit" variant={"destructive"}>
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FullPageImageView;
