import React from "react";
import { Calendar } from "antd";
import { Button } from "@/components/ui/button"; // Using shadcn/ui for buttons
import { CheckCircle, List, Calendar as CalendarIcon } from "lucide-react";

const App = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 bg-white border-r shadow-sm">
        <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">
          Filter
        </h2>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4">
            <Button variant="ghost" className="flex items-center gap-2 text-green-600">
              <CalendarIcon size={18} /> Calendar
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 text-gray-500">
              <List size={18} /> List View
            </Button>
            <Button variant="ghost" className="flex items-center gap-2 text-gray-500">
              <CheckCircle size={18} /> Completed
            </Button>
          </div>
        </div>

        {/* Calendar Component */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Calendar 
            fullscreen={true} 
            onPanelChange={onPanelChange} 
            headerRender={({ value, onChange }) => (
              <div className="flex justify-between items-center p-4">
                <Button 
                  onClick={() => onChange(value.clone().subtract(1, "month"))}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
                >
                  &lt;
                </Button>
                <h2 className="text-xl font-semibold">{value.format("MMMM YYYY")}</h2>
                <Button 
                  onClick={() => onChange(value.clone().add(1, "month"))}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md"
                >
                  &gt;
                </Button>
              </div>
            )}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
