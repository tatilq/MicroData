$(document).ready(function(){
    var table=$("#datatable").dataTable();
    var tableTools=new $.fn.dataTable.TableTools(table,{
        'sSwfPath': '//cdn.datatables.net/tabletools/2.2.4/swf/copy_csv_xls_pdf.swf','aButtons':['xls']
    });
    $(tableTools.fnContainer()).insertBefore('#datatable_wrapper');
});