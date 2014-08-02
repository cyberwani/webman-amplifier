/**
 * WebMan Visual Composer plugin additional scripts
 *
 * Compatible also with Visual Composer v4.3+
 *
 * @package     WebMan Amplifier
 * @subpackage  Shortcodes
 *
 * @since       1.0
 * @version     1.0.9.5
 */

!function(a){_.extend(vc.atts,{wm_radio:{parse:function(b){var c=[],d="";return a("input[name="+b.param_name+"]",this.$content).each(function(){var d=a(this);d.is(":checked")&&(c.push(d.attr("value")),d.parent(".input-item").addClass("active"))}),c.length>0&&(d=c.join(",")),d}}}),window.VcCustomAccordionView=vc.shortcode_view.extend({adding_new_tab:!1,events:{"click .add_tab":"addTab","click > .controls .column_delete, > .vc_controls .column_delete, > .vc_controls .vc_control-btn-delete":"deleteShortcode","click > .controls .column_edit, > .vc_controls .column_edit, > .vc_controls .vc_control-btn-edit":"editElement","click > .controls .column_clone, > .vc_controls .column_clone, > .vc_controls .vc_control-btn-clone":"clone"},render:function(){return window.VcCustomAccordionView.__super__.render.call(this),this.$content.sortable({axis:"y",handle:"h3",stop:function(b,c){c.item.prev().triggerHandler("focusout"),a(this).find("> .wpb_sortable").each(function(){var b=a(this).data("model");b.save({order:a(this).index()})})}}),this},changeShortcodeParams:function(a){window.VcCustomAccordionView.__super__.changeShortcodeParams.call(this,a);var b=_.isString(this.model.get("params").collapsible)&&"yes"===this.model.get("params").collapsible?!0:!1;this.$content.hasClass("ui-accordion")&&this.$content.accordion("option","collapsible",b)},changedContent:function(a){this.$content.hasClass("ui-accordion")&&this.$content.accordion("destroy");var b=!0;this.$content.accordion({header:"h3",navigation:!1,autoHeight:!0,heightStyle:"content",collapsible:b,active:this.adding_new_tab===!1&&a.model.get("cloned")!==!0?0:a.$el.index()}),this.adding_new_tab=!1},addTab:function(a){this.adding_new_tab=!0;var b=jQuery(a.currentTarget).data("item"),c=jQuery(a.currentTarget).data("item-title");a.preventDefault(),vc.shortcodes.create({shortcode:b,params:{title:c},parent_id:this.model.id})},_loadDefaults:function(){window.VcCustomAccordionView.__super__._loadDefaults.call(this)}}),window.VcCustomAccordionTabView=window.VcColumnView.extend({events:{"click > [data-element_type] > .controls .column_delete, .vc_control-btn-delete":"deleteShortcode","click > [data-element_type] > .controls .column_add, .vc_control-btn-prepend":"addElement","click > [data-element_type] > .controls .column_edit, .vc_control-btn-edit":"editElement","click > [data-element_type] > .controls .column_clone, .vc_control-btn-clone":"clone","click > [data-element_type] > .wpb_element_wrapper > .vc_empty-container":"addToEmpty"},setContent:function(){this.$content=this.$el.find("> [data-element_type] > .wpb_element_wrapper > .vc_container_for_children")},changeShortcodeParams:function(a){var b=a.get("params");window.VcCustomAccordionTabView.__super__.changeShortcodeParams.call(this,a),_.isObject(b)&&_.isString(b.title)&&this.$el.find("> h3 .tab-label").text(b.title)},setEmpty:function(){a("> [data-element_type]",this.$el).addClass("empty_column"),this.$content.addClass("empty_container vc_empty-container")},unsetEmpty:function(){a("> [data-element_type]",this.$el).removeClass("empty_column"),this.$content.removeClass("empty_container vc_empty-container")}}),window.VcCustomPricingTableView=vc.shortcode_view.extend({adding_new_tab:!1,events:{"click .add_tab":"addTab","click > .controls .column_delete, > .vc_controls .column_delete, > .vc_controls .vc_control-btn-delete":"deleteShortcode","click > .controls .column_edit, > .vc_controls .column_edit, > .vc_controls .vc_control-btn-edit":"editElement","click > .controls .column_clone, > .vc_controls .column_clone, > .vc_controls .vc_control-btn-clone":"clone"},render:function(){return window.VcCustomPricingTableView.__super__.render.call(this),this.$content.sortable({axis:"y",handle:".wpb_element_wrapper",stop:function(b,c){c.item.prev().triggerHandler("focusout"),a(this).find("> .wpb_sortable").each(function(){var b=a(this).data("model");b.save({order:a(this).index()})})}}),this},addTab:function(a){this.adding_new_tab=!0;var b=jQuery(a.currentTarget).data("item"),c=jQuery(a.currentTarget).data("item-title");a.preventDefault(),vc.shortcodes.create({shortcode:b,params:{caption:c},parent_id:this.model.id})},_loadDefaults:function(){window.VcCustomPricingTableView.__super__._loadDefaults.call(this)}})}(window.jQuery);