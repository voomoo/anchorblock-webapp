import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import { useToast } from "@/components/ui/use-toast";

const Sales = () => {
  const { toast } = useToast();
  const unHandledFeatures = () => {
    toast({
      variant: "destructive",
      title: "Oops!",
      description: "This feature is not ready yet!",
    });
  };

  return (
    <div>
      <span className="text-2xl font-medium">Sales</span>
      <div className="overflow-y-scroll" style={{ maxHeight: "60vh" }}>
        <Table className="mt-6">
          <TableHeader className="sticky top-0 bg-slate-100 rounded-lg">
            <TableRow>
              <TableHead className="w-[100px]">#ID</TableHead>
              <TableHead>Item</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5, 6].map((sale: number) => (
              <TableRow key={sale}>
                <TableCell className="font-medium">{sale}</TableCell>
                <TableCell>Cool Item {sale}</TableCell>
                <TableCell>
                  $ {(Math.random() * sale * 100).toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Icon
                        icon="tabler:dots"
                        className="w-6 h-6 text-gray-500"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel
                        className="cursor-pointer"
                        onClick={unHandledFeatures}
                      >
                        View Details
                      </DropdownMenuLabel>
                      <DropdownMenuLabel
                        className="cursor-pointer"
                        onClick={unHandledFeatures}
                      >
                        Edit
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuLabel
                        className="text-red-500 cursor-pointer"
                        onClick={unHandledFeatures}
                      >
                        Delete
                      </DropdownMenuLabel>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Sales;
