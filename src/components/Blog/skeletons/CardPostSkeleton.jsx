export const CardPostSkeleton = () => {
  return (
    <div
      className="@max-xs:w-full w-[340px] max-h-[510px] mb-4 flex flex-col items-center animate-pulse"
      role="status"
      aria-label="Carregando publicação"
    >
      <div className="h-[230px] max-sm:h-[160px] w-full bg-gray-200" />

      <div className="w-full">
        <div className="pt-2 space-y-2">
          <div className="h-5 w-full rounded bg-gray-200" />
          <div className="h-5 w-3/4 rounded bg-gray-200" />
        </div>

        <div className="mt-2.5 max-sm:flex flex-col items-center space-y-2 font-family-headers">
          <div className="h-4 w-24 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
}