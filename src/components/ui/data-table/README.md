# Data Table Component

A reusable data table component built with TanStack Table and shadcn/ui that supports both **client-side** and **server-side** operations.

## Features

- ✅ **Client-side** pagination, sorting, and filtering
- ✅ **Server-side** pagination, sorting, and filtering
- ✅ Row actions with dropdown menu
- ✅ Sortable column headers
- ✅ Search functionality
- ✅ Column visibility control
- ✅ Row selection
- ✅ Loading states
- ✅ Empty states

## Quick Start

### Client-Side (Default)

```tsx
import { DataTable } from '@/components/ui/data-table';

<DataTable
  columns={columns}
  data={data}
  searchKey="name"
  pageSize={20}
/>
```

### Server-Side

```tsx
<DataTable
  columns={columns}
  data={data?.items}
  pageCount={data?.totalPages}
  pagination={pagination}
  onPaginationChange={setPagination}
  manualPagination
/>
```

See full documentation and examples below.
