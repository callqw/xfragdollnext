declare namespace BASIC {
  interface AllData {
    alldata?: number;
    Provider: any;
  }
  type ImgList = {
    url: string;
  };
  type Data = {
    author?: string;
    class?: string;
    content?: string;
    createTime?: string;
    description?: string;
    id?: number;
    imgList?: ImgList[];
    keywords?: string;
    label?: string;
    pageId?: number;
    pv?: number;
    sendDate?: string;
    sendTime?: string;
    title?: string;
    userId?: number;
    Provider?: any;
  };
  type BannerData = {
    title: string;
    zhonggong: string;
    zhongmu: string;
  };

  type LinkData = {
    createTime: string;
    id: number;
    linkName: string;
    linkUrl: string;
    userId: number;
  };
  type Link = {
    data: LinkData[];
    msg: string;
    status: number;
  };
  type Seo = {
    author: string;
    description: string;
    keywords: string;
    title: string;
  };

  type NewsData = {
    data: Data[] | null;
    date: { val: string };
    Link: Link;
    Seo: Seo;
    err?: number;
    msg?: string;
  };
  type IndexData = NewsData & {
    zhongmu?:any
    zhonggong?:any
    youmao?:any
    title?:any
    maoshezhanshi?:any;
    id?: number;
    data?: any;
    Provider: any;
  };
  type NewsDataErr = {};
  type NewsDataNew = NewsData | NewsDataErr;
}
