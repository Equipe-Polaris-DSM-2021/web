class DownloadService {
  downloadBandAndSave(url, bandName) {
    const link = document.createElement("a");

    link.href = url;
    link.target = "_blank";
    link.setAttribute("download", bandName ?? "");

    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}

export default new DownloadService();
