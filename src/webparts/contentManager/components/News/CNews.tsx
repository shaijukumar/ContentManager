import { INews } from "./INews";

export class CNews {
  Title: string;
  ShortDescription: string;
  Story: string;
  ImagePath: string;

  constructor(item: INews) {
    this.Title = item.Title;
    this.ShortDescription = item.ShortDescription;
    this.Story = item.Story;
    this.ImagePath = item.ImagePath;
  }
}
