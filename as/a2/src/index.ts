import {l1F} from "@arran/l1";
import {l2F} from "@arran/l2";
import {l3F} from "@arran/l3";

export function a2() : string {
    return l1F() + l2F() + l3F();
}