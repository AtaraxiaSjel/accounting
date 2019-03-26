$(function() {
    changeBlocks($('#fieldType option:selected').val());

    $('#fieldType').change(function(){
        changeBlocks($(this).val());
    });

    function changeBlocks(type) {
        switch(type){
            case 'assets':{
                $('#furnitureLabel').hide();
                $('#fieldFurnitureBlock').hide();
                $('#equipmentLabel').hide();
                $('#fieldEquipmentTypeBlock').hide();
                $('#fieldEquipmentManufacturerBlock').hide();
                $('#fieldEquipmentSpecificationsBlock').hide();
                $('#btnLicenseSetup').hide();
            }break;
            case 'furniture':{
                $('#furnitureLabel').show();
                $('#fieldFurnitureBlock').show();
                $('#equipmentLabel').hide();
                $('#fieldEquipmentTypeBlock').hide();
                $('#fieldEquipmentManufacturerBlock').hide();
                $('#fieldEquipmentSpecificationsBlock').hide();
                $('#btnLicenseSetup').hide();
            }break;
            case 'equipment':{
                $('#furnitureLabel').hide();
                $('#fieldFurnitureBlock').hide();
                $('#equipmentLabel').show();
                $('#fieldEquipmentTypeBlock').show();
                $('#fieldEquipmentManufacturerBlock').show();
                $('#fieldEquipmentSpecificationsBlock').show();
                $('#btnLicenseSetup').show();
            }break;
            default: {
                $('#furnitureLabel').hide();
                $('#fieldFurnitureBlock').hide();
                $('#equipmentLabel').hide();
                $('#fieldEquipmentTypeBlock').hide();
                $('#fieldEquipmentManufacturerBlock').hide();
                $('#fieldEquipmentSpecificationsBlock').hide();
                $('#btnLicenseSetup').hide();
            }
        }
    }
});