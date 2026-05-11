export default function Subtitles({ text }) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm">
      {text}
    </div>
  );
}