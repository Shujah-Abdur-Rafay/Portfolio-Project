export default function Footer() {
  return (
    <footer className="w-full max-w-[1100px] mx-auto px-4 sm:px-8 py-8 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="font-headline tracking-widest">MIGUEL LÓPEZ</p>
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} MIGUEL LÓPEZ, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
