import React from "react";

import { Badge, cn } from "@potidev/react-vulpix-pack";

import { TableActiveFiltersProps } from "./types";
import { X } from "lucide-react";

export const TableActiveFilters = ({ className, actives, onRemoveFilter }: TableActiveFiltersProps) => {
  return actives && actives.length > 0 && (
    <section className={cn("flex flex-col gap-1", className)}>
      <span className="text-sm">Filtros: </span>
      <div className="flex flex-row gap-2 flex-wrap">
        {actives.map(({ label, value, key }) => (
          <Badge
            key={value}
            variant="outline"
            className="flex flex-row gap-1"
          >
            {label}
            {onRemoveFilter && (
              <button
                className="cursor-pointer ml-[-2px]"
                onClick={() => onRemoveFilter(key)}
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </Badge>
        ))}
      </div>
    </section>
  )
};