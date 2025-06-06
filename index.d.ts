declare module '8colors' {
    interface EightColors {
        store: string;

        // Direct color methods
        black(str: string): string;
        red(str: string): string;
        green(str: string): string;
        yellow(str: string): string;
        blue(str: string): string;
        magenta(str: string): string;
        cyan(str: string): string;
        white(str: string): string;

        // Chainable foreground standard
        k(str: string): this;
        r(str: string): this;
        g(str: string): this;
        y(str: string): this;
        b(str: string): this;
        m(str: string): this;
        c(str: string): this;
        w(str: string): this;

        // Chainable foreground bright
        bk(str: string): this;
        br(str: string): this;
        bg(str: string): this;
        by(str: string): this;
        bb(str: string): this;
        bm(str: string): this;
        bc(str: string): this;
        bw(str: string): this;

        // Chainable background standard
        K(): this;
        R(): this;
        G(): this;
        Y(): this;
        B(): this;
        M(): this;
        C(): this;
        W(): this;

        // Chainable background bright
        BK(): this; // Note: You have two BB's in your code, I've renamed bright_bg_black to BK
        BR(): this;
        BG(): this;
        BY(): this;
        BB(): this;
        BM(): this;
        BC(): this;
        BW(): this;

        // Chainable styles
        V(): this;
        _(): this;
        reset(): this;
        I(): this;
        blk(): this;
        rblk(): this;

        /**
         * Returns the final styled string and resets the internal store.
         */
        end(): string;
    }

    const eightColors: EightColors;
    export = eightColors;
}