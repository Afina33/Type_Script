import { type Dispatch, type SetStateAction } from "react";

export interface MassageData {
  massageText: string;
}

export interface MassageDataContext {
  massageData: MassageData | undefined;
  setMassageData: Dispatch<SetStateAction<MassageData | undefined>>;
}