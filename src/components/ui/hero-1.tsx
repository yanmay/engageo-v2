import { cn } from "../../lib/utils";
import { Button } from "./button";
import { RocketIcon, ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { LogoCloud } from "./logo-cloud-3";

export function HeroSection() {
    return (
        <section className="mx-auto w-full max-w-5xl">
            {/* Top Shades */}
            <div
                aria-hidden="true"
                className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
            >
                <div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,var(--ink-faint),transparent)] contain-strict" />
            </div>

            {/* X Bold Faded Borders */}
            <div
                aria-hidden="true"
                className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
            >
                <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 left-0 z-10 h-full w-px bg-[var(--rule)]" />
                <div className="mask-y-from-80% mask-y-to-100% absolute inset-y-0 right-0 z-10 h-full w-px bg-[var(--rule)]" />
            </div>

            {/* main content */}

            <div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">
                {/* X Content Faded Borders */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-1 size-full overflow-hidden"
                >
                    <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-[var(--rule)] to-transparent md:left-8" />
                    <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-[var(--rule)] to-transparent md:right-8" />
                    <div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-[var(--rule)] to-transparent md:left-12" />
                    <div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-[var(--rule)] to-transparent md:right-12" />
                </div>

                <a
                    className={cn(
                        "group mx-auto flex w-fit items-center gap-3 rounded-full border border-[var(--rule)] bg-[var(--surface)] px-4 py-2 shadow-sm",
                        "fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out hover:translate-y-[-2px]"
                    )}
                    href="#audit"
                >
                    <div className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-[var(--ink)]">AI Voice + WhatsApp Recovery</span>
                    <span className="block h-5 border-l border-[var(--rule)]" />

                    <ArrowRightIcon className="size-3 text-[var(--ink-muted)] duration-150 ease-out group-hover:translate-x-1" />
                </a>

                <h1
                    className={cn(
                        "fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-4xl tracking-tight delay-100 duration-500 ease-out md:text-5xl lg:text-7xl f-h2 text-[var(--ink)]",
                    )}
                >
                    We answer the calls <br /> <em className="f-italic" style={{ color: 'var(--green)' }}>your clinic misses.</em>
                </h1>

                <p className="fade-in slide-in-from-bottom-10 mx-auto max-w-xl animate-in fill-mode-backwards text-center text-base tracking-wider delay-200 duration-500 ease-out sm:text-lg md:text-xl f-body text-[var(--ink-muted)]">
                    Every missed call triggers an AI voice callback in 8 seconds. We qualify the patient, confirm the slot, and send a WhatsApp reminder — while you're with someone else.
                </p>

                <div className="fade-in slide-in-from-bottom-10 flex animate-in flex-row flex-wrap items-center justify-center gap-4 fill-mode-backwards pt-4 delay-300 duration-500 ease-out">
                    <Button className="rounded-full bg-[var(--ink)] text-[var(--parchment)] hover:bg-[var(--deep)] hover:scale-[1.03] transition-transform" size="lg">
                        <PhoneCallIcon data-icon="inline-start" className="size-4 mr-2" />{" "}
                        Get Free Audit
                    </Button>
                    <Button className="rounded-full bg-transparent border border-[var(--rule)] text-[var(--ink)] hover:bg-[var(--surface)] hover:scale-[1.03] transition-transform shadow-none" size="lg">
                        See How It Works{" "}
                        <ArrowRightIcon
                            className="size-4 ms-2" data-icon="inline-end" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

export function LogosSection() {
    return (
        <section className="relative space-y-4 border-t border-[var(--rule)] pt-6 pb-20">
            <h2 className="text-center font-bold font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)] md:text-sm">
                Trusted by Top Clinics Across India
            </h2>
            <div className="relative z-10 mx-auto max-w-4xl opacity-70">
                <LogoCloud logos={logos} />
            </div>
        </section>
    );
}

const logos = [
    {
        src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
        alt: "Nvidia Logo",
    },
    {
        src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
        alt: "Supabase Logo",
    },
    {
        src: "https://storage.efferd.com/logo/openai-wordmark.svg",
        alt: "OpenAI Logo",
    },
    {
        src: "https://storage.efferd.com/logo/turso-wordmark.svg",
        alt: "Turso Logo",
    },
    {
        src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
        alt: "Vercel Logo",
    },
    {
        src: "https://storage.efferd.com/logo/github-wordmark.svg",
        alt: "GitHub Logo",
    },
    {
        src: "https://storage.efferd.com/logo/claude-wordmark.svg",
        alt: "Claude AI Logo",
    },
    {
        src: "https://storage.efferd.com/logo/clerk-wordmark.svg",
        alt: "Clerk Logo",
    },
];
