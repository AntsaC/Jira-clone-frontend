import ActionBar from "../common/ActionBar"
import MyDataGrid from "../common/MyDataGrid"

export default function SprintDataTable({sprints}) {
    const cols = [
        {
            field: 'name',
            valueGetter: (params) => params.row.sprint.name,
            headerName: 'Name'
        },
        {
            field: 'startDate',
            valueGetter: (params) => params.row.sprint.startDate,
            headerName: 'Start date'
        },
        {
            field: 'endDate',
            valueGetter: (params) => params.row.sprint.endDate,
            headerName: 'End Date'
        },
        {
            field: 'status',
            headerName: 'Status'
        },
        {
            field: 'action',
            headerName: '',
            renderCell: (params) => (
                <ActionBar />
            ),
            width: 150
        },
    ]

    return <MyDataGrid cols={cols} rows={sprints} getRowId={row => row.sprint.id} />
}