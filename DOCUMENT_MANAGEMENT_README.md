# Document Management Feature

This feature allows administrators to view and delete uploaded documents from the Admin Dashboard.

## Features

### 1. Document Viewing
- **New "Documents" Tab**: Added a fifth tab to the Admin Dashboard specifically for document management
- **Comprehensive List**: Shows all documents from all categories (Annual Reports, Strategic Plans, Research Work, etc.)
- **Document Details**: Displays title, type, access level (Public/Paid), and upload date
- **Export Functionality**: Export all documents to Excel for record keeping

### 2. Document Deletion
- **Admin-Only Access**: Only users with admin role can delete documents
- **Confirmation Dialog**: Prevents accidental deletions with a confirmation popup
- **Complete Removal**: Deletes both the database record and the file from Supabase Storage
- **Error Handling**: Graceful error handling with user feedback

## Database Setup

Before using this feature, ensure your Supabase database has the required tables. Run the SQL script:

```sql
-- Run document-tables-setup.sql in your Supabase SQL Editor
```

This script creates:
- All document tables (reports, strategic_plans, research_work, etc.)
- Row Level Security (RLS) policies
- Proper indexes for performance
- Admin-only access controls

## Storage Buckets

The feature works with the following Supabase Storage buckets:
- `reports`
- `strategic-plans`
- `research-work`
- `budget-analysis`
- `policy-briefs`
- `working-papers`
- `parliamentary-submissions`
- `miscellaneous-research`

## Usage

1. **Access**: Log in as an admin user
2. **Navigate**: Go to Admin Dashboard
3. **View Documents**: Click on the "Documents" tab
4. **Delete Document**: Click the red delete icon next to any document
5. **Confirm**: Confirm the deletion in the popup dialog

## Security

- **Admin-Only**: Only users with `role = 'admin'` can delete documents
- **RLS Policies**: Database-level security ensures only admins can modify documents
- **Confirmation Required**: Prevents accidental deletions
- **Complete Cleanup**: Removes both database records and storage files

## Error Handling

The feature includes comprehensive error handling:
- Storage deletion errors are logged but don't prevent database cleanup
- User-friendly error messages
- Loading states during operations
- Graceful fallbacks for missing data

## Technical Details

### Components Modified
- `src/pages/AdminDashboard.jsx`: Added Documents tab and delete functionality

### New Functions
- `fetchAllDocuments()`: Retrieves all documents from all tables
- `handleDeleteDocument()`: Handles document deletion process
- `openDeleteDialog()` / `closeDeleteDialog()`: Manages confirmation dialog

### Dependencies Added
- `@mui/icons-material/Delete`: Delete icon for the UI
- Material-UI Dialog components for confirmation

## Future Enhancements

Potential improvements for future versions:
- Bulk delete functionality
- Document preview before deletion
- Document metadata editing
- Document categorization improvements
- Audit trail for deletions
