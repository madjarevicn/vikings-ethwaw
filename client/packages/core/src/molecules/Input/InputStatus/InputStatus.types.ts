import { Label } from "atoms";

interface IInputStatusExpansion {
	Type: typeof Label.Type;
	Size: typeof Label.Size;
	Font: typeof Label.Font;
	Color: typeof Label.Color;
	Weight: typeof Label.Weight;
	Case: typeof Label.Case;
	Variant: typeof Label.Variant;
	Align: typeof Label.Align;
}

export type { IInputStatusExpansion };
