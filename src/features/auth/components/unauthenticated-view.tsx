import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ShieldAlertIcon } from "lucide-react";
import React from "react";

export const UnauthenticatedView = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background">
      <div className="w-full max-w-lg bg-muted">
        <Item variant="outline">
          <ItemMedia variant={"icon"}>
            <ShieldAlertIcon className="w-6 h-6 text-muted-foreground" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Unauthorized Access</ItemTitle>
            <ItemDescription>
              You do not have the necessary permissions to view this content
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>
    </div>
  );
};
