import { useState } from "react";
import Filter from "../filter/Filter";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return <>
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 border-5">
        <Filter />
        <div className="flex-1">
          <div className="flex item-center gap-2">
            <Input
              type="text"
              value={searchQuery}
              placeholder="search by restaurant and cuisines."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="bg-[#D19254] hover:bg-[#D18C47]">Search</Button>
          </div>
          <div>
            <div className="flex flex-col gap-3 md:flex-row md:items:center md:gap-2 my-3">
              <h1 className="font-medium text-lg">(2) Search result found</h1>
              <div className="flex flex-wrap mb-4 md:mb-0">
                {
                  ["Biryani", "Momos", "Jalebi"].map((selectedFilter: string, idx: number) => (
                    <div key={idx} className="relative inline-flex items-center">
                      <Badge className="text-[#D19254] rounded-md hover:cursor-pointer pr-6 whitespace-nowrap" variant="outline">{selectedFilter}
                      </Badge>
                      <X className="absolute text-[#D19254] right-1 hover:cursor-pointer" size={16}></X>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Search;