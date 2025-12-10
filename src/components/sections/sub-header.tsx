import Link from 'next/link';

export default function SubHeader() {
  return (
    <section className="w-full border-y border-border">
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-12 py-2 md:py-0 text-xs md:text-sm text-center">
            <p className="uppercase tracking-widest">
              <span className="text-foreground">Marketing & Sales</span>
              <span className="mx-2 text-muted-foreground hidden md:inline">|</span>
            </p>
             <p className="uppercase tracking-widest">
              <span className="text-foreground">Content Strategy</span>
              <span className="mx-2 text-muted-foreground hidden md:inline">|</span>
             </p>
             <p className="uppercase tracking-widest">
              <span className="text-foreground">CRM & Data</span>
            </p>
        </div>
      </div>
    </section>
  );
}
