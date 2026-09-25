export function BlogSkeleton() {
  return (
    <section
      className="flex sm:justify-center max-sm:w-full"
      role="status"
      aria-label="Carregando artigo"
    >
      <div
        id="displayHtml"
        className="w-full max-w-6xl animate-pulse"
        aria-hidden="true"
      >
        {/* Título */}
        <div className="mb-8 space-y-3">
          <div className="h-9 w-full rounded bg-gray-200" />
          <div className="h-9 w-4/5 rounded bg-gray-200" />
        </div>

        {/* Seções do artigo */}
        {Array.from({ length: 4 }, (_, section) => (
          <div key={section} className="mb-10">
            <div className="mb-5 h-7 w-2/3 rounded bg-gray-200" />

            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-11/12 rounded bg-gray-200" />
              <div className="h-4 w-3/4 rounded bg-gray-200" />
            </div>

            <div className="mt-6 space-y-3">
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gray-200" />
            </div>
          </div>
        ))}

        {/* Leituras recomendadas */}
        <div className="w-full py-8 sm:px-8">
          <div className="mb-5 h-6 w-48 rounded bg-gray-200" />

          <div className="flex gap-6 overflow-hidden">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="w-[340px] shrink-0">
                <div className="h-[230px] w-full bg-gray-200 max-sm:h-[160px]" />
                <div className="mt-3 h-5 w-full rounded bg-gray-200" />
                <div className="mt-2 h-5 w-3/4 rounded bg-gray-200" />
                <div className="mt-3 h-4 w-24 rounded bg-gray-200" />
                <div className="mt-3 h-4 w-full rounded bg-gray-200" />
                <div className="mt-2 h-4 w-5/6 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
