// components/HeroSkeleton.jsx
export default function HeroSkeleton() {
    return (
      <section className="bg-gradient-to-br from-[#fff5f5] via-[#fff1f1] to-[#ffe4e6] py-16 md:py-24 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <div className="h-12 bg-gray-300 rounded w-3/4" />
              <div className="h-5 bg-gray-300 rounded w-full" />
              <div className="h-5 bg-gray-300 rounded w-5/6" />
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="h-12 bg-gray-300 rounded-full w-full sm:w-3/4" />
                <div className="h-12 bg-gray-300 rounded-full w-full sm:w-1/4" />
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                  <div className="w-10 h-10 bg-gray-300 rounded-full" />
                </div>
                <div className="h-5 bg-gray-300 rounded w-32" />
              </div>
            </div>
  
            <div className="w-full h-full lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gray-300 aspect-[3/4]" />
              <div className="rounded-xl bg-gray-300 aspect-[3/4]" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  