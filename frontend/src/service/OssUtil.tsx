import { RootState } from "@/redux/reduxStore";
import OSS from "ali-oss";
import { useSelector } from "react-redux";

const client = new OSS({
  region: "oss-cn-qingdao",
  accessKeyId: "LTAI5tLExRGvvAwM1NXnSSaC",
  accessKeySecret: "V3TkOipZ2YwJ5pCDm7NrOuquzh1X3m",
  bucket: "fungumi",
});

export function header(id: number) {
  return {
    "Content-Type": "application/json",
    "Content-Disposition": id + ".jpg",
    "x-oss-storage-class": "Standard",
    "x-oss-object-type": "Image",
    "x-oss-object-acl": "public-read",
    "x-oss-forbid-overwrite": "true",
  };
}

export default async function upload() {
  const id = useSelector((state: RootState) => state.user.id);
  const name = "avatar/" + id + ".jpg";
  var headers = header(id);
  // return await client.put(name, file, { headers })
  const f = new File(["my name"], "infoTxt", {
    type: "text/plain",
  });
  return await client.put("test.jpg", f, { headers });
}

// LTAI5tLExRGvvAwM1NXnSSaC
// V3TkOipZ2YwJ5pCDm7NrOuquzh1X3m
