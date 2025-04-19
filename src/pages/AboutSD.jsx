import { useState } from "react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ChevronRight, Menu } from "lucide-react";

export default function FigmaReplica() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white shadow-md transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          {isOpen && <span className="font-bold text-xl">Logo</span>}
          <button onClick={toggleMenu} className="p-2">
            <Menu size={20} />
          </button>
        </div>
        <div className="flex flex-col p-4 flex-grow">
          {isOpen ? (
            <div className="space-y-4">
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer">
                <span className="h-2 w-2 rounded-full bg-blue-500 mr-4"></span>
                <span>Dashboard</span>
              </div>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer">
                <span className="h-2 w-2 rounded-full bg-gray-300 mr-4"></span>
                <span>Payments</span>
              </div>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer">
                <span className="h-2 w-2 rounded-full bg-gray-300 mr-4"></span>
                <span>Accounts</span>
              </div>
              <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer">
                <span className="h-2 w-2 rounded-full bg-gray-300 mr-4"></span>
                <span>Settings</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 flex flex-col items-center">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-200">
          {isOpen ? (
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <div>
                <div className="text-sm font-medium">John Doe</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Welcome back, John</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,782.00</div>
              <p className="text-xs text-green-500 mt-1">+15% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Spending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$8,478.00</div>
              <p className="text-xs text-red-500 mt-1">+5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Saved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,892.00</div>
              <p className="text-xs text-green-500 mt-1">+7% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Transactions Section */}
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your recent transactions are displayed below.</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Input 
                className="w-36 h-8"
                placeholder="Search..." 
              />
              <Select>
                <SelectTrigger className="w-32 h-8">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Amazon Purchase</TableCell>
                  <TableCell>Shopping</TableCell>
                  <TableCell>Apr 20, 2025</TableCell>
                  <TableCell className="text-right text-red-500">-$129.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Payroll Deposit</TableCell>
                  <TableCell>Income</TableCell>
                  <TableCell>Apr 15, 2025</TableCell>
                  <TableCell className="text-right text-green-500">+$2,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Grocery Store</TableCell>
                  <TableCell>Groceries</TableCell>
                  <TableCell>Apr 12, 2025</TableCell>
                  <TableCell className="text-right text-red-500">-$75.40</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Monthly Rent</TableCell>
                  <TableCell>Housing</TableCell>
                  <TableCell>Apr 01, 2025</TableCell>
                  <TableCell className="text-right text-red-500">-$1,400.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" size="sm" className="text-xs">
              View All Transactions
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Spending Overview</CardTitle>
              <CardDescription>Your top spending categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Housing</span>
                  <span>$1,400.00</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Food & Dining</span>
                  <span>$850.00</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Shopping</span>
                  <span>$650.00</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Transportation</span>
                  <span>$400.00</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bills</CardTitle>
              <CardDescription>Bills due in the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Internet Service</div>
                    <div className="text-sm text-gray-500">Due in 3 days</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$79.99</div>
                    <Button size="sm" variant="outline" className="text-xs mt-1">Pay</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Electricity Bill</div>
                    <div className="text-sm text-gray-500">Due in 7 days</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$145.00</div>
                    <Button size="sm" variant="outline" className="text-xs mt-1">Pay</Button>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">Credit Card</div>
                    <div className="text-sm text-gray-500">Due in 15 days</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$350.00</div>
                    <Button size="sm" variant="outline" className="text-xs mt-1">Pay</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}