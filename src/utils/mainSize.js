export function toggleSize(mainRef) {
  const mainDiv = mainRef.current;
  if (mainDiv) {
    mainDiv.classList.toggle("small-main");
    mainDiv.classList.toggle("big-main");
  }
}
