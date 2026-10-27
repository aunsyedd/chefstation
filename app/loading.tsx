import { TrainTrack } from "@/components/RouteLoader";

export default function Loading() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center">
      <img src="/logo bg.png" alt="" className="h-32 w-32 animate-splash-pop object-contain" />
      <TrainTrack />
    </div>
  );
}
