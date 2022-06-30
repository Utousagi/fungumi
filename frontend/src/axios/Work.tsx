import axios from "axios";

export async function getWorkInfo(workId: number) {
  let data;
  await axios({
    method: "get",
    url: "/work/workInfo?workId=" + workId,
  }).then((res) => {
    data = res.data.data;
  });
  return data;
}
