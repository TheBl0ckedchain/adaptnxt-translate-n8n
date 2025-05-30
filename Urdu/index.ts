import channel from "./channel/channel.json";
import common from "./common.json";
import component from "./component/component.json";
import courier from "./courier/courier.json";
import dashboard from "./dashboard/dashboard.json";
import documentation from "./documentation/documentation.json";
import global from "./global/global.json";
import guide from "./guide/guide.json";
import listing from "./listing/listing.json";
import marketplace from "./marketplace/marketplace.json";
import order from "./order/order.json";
import orderitem from "./orderitem/orderitem.json";
import permissionRole from "./permission/role.json";
import product from "./product/product.json";
import settings from "./settings/settings.json";
import settlement from "./settlement/settlement.json";
import setup from "./setup/setup.json";
import shipment from "./shipment/shipment.json";
import sys from "./sys.json";
import avatorDropMenu from "./user/avatorDropMenu.json";
import tagsViewDropMenu from "./user/tagsViewDropMenu.json";
import title from "./user/title.json";

export default {
	...common,
	...sys,
	...global,
	...settings,
	...avatorDropMenu,
	...tagsViewDropMenu,
	...title,
	...permissionRole,
	...dashboard,
	...guide,
	...documentation,
	...order,
	...orderitem,
	...courier,
	...channel,
	...listing,
	...product,
	...shipment,
	...setup,
	...marketplace,
	...component,
	...settlement,
};
