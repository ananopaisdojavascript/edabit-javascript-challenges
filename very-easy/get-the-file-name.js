const getFilename = (path) => {
  return path.split("/").pop();
};

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(getFilename("ffprobe.exe"));
console.log(getFilename("Music/Drafts/unfinished2.midi"));
console.log(getFilename("C:/Users/chad/OneDrive/Desktop/Atom.lnk"));
console.log(
  getFilename(
    "senoron/OneDrive/Desktop/DDLC-1.1.1-pc/lib/windows-i686/DDLC.exe"
  )
);
