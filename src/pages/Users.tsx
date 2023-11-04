import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import Axios from "@/api/axiosInstance";
import React from "react";
import Pagination from "react-js-pagination";
import { useToast } from "@/components/ui/use-toast";

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users = () => {
  const { toast } = useToast();
  const [page, setPage] = React.useState(1);

  const getUsers = async () => {
    try {
      const response = await Axios.get(`users?per_page=10&page=${page}`);
      return response.data;
    } catch (error) {
      throw new Error("Error retrieving users");
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const unHandledFeatures = () => {
    toast({
      variant: "destructive",
      title: "Oops!",
      description: "This feature is not ready yet!",
    });
  };

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["users", page], queryFn: getUsers });

  return (
    <div>
      <span className="text-2xl font-medium">Users List</span>
      <div className="overflow-y-scroll" style={{ maxHeight: "60vh" }}>
        <Table className="mt-6">
          {isLoading && (
            <TableCaption>Please wait while we prepare your data.</TableCaption>
          )}
          {isError && <TableCaption>Problem Loading Data</TableCaption>}
          <TableHeader className="sticky top-0 bg-slate-100 rounded-lg">
            <TableRow>
              <TableHead className="w-[100px]">#ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!isLoading &&
              !isError &&
              users?.data?.map((user: User) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user?.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12 rounded-xl">
                        <AvatarImage src={user?.avatar} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span>{`${user?.first_name} ${user?.last_name}`}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user?.email}</TableCell>
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
      {!isLoading && !isError && (
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={12}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="w-8 h-8 p-4 text-md flex items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg"
          innerClass="flex gap-4 mt-8"
          nextPageText={
            <Icon icon="ic:round-navigate-next" className="w-6 h-6" />
          }
          prevPageText={
            <Icon icon="ic:round-navigate-before" className="w-6 h-6" />
          }
          lastPageText={
            <Icon icon="ci:chevron-right-duo" className="w-6 h-6" />
          }
          firstPageText={
            <Icon icon="ci:chevron-left-duo" className="w-6 h-6" />
          }
          activeClass="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
          disabledClass="bg-accent text-gray-400 hover:text-gray-400 hover:bg-accent"
        />
      )}
    </div>
  );
};

export default Users;
