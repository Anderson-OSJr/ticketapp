import { Status } from "@prisma/client";
import { Badge } from "./ui/badge";

interface Props {
    status: Status; // This "Status" type came from enum Status in schema.prisma file.
}

const statusMap: Record<
                        Status, 
                        {label:string;
                         color: "bg-red-400" | "bg-blue-400" | "bg-green-400"
                        }>
                        = {
                            OPEN: {label:"Open", color: "bg-red-400"},
                            STARTED: {label:"Started", color: "bg-blue-400"},
                            CLOSED: {label:"Closed", color: "bg-green-400"},
                        };

const TicketSatusBadge = ({status}:Props) => {
  return (
    <div>
        <Badge className={`${statusMap[status].color} text-background hover:${statusMap[status].color}`}>
            {statusMap[status].label}
        </Badge>
    </div>
  )
}

export default TicketSatusBadge