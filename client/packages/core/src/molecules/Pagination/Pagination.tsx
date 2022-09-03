import styles from "./Pagination.module.scss";

import * as React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import { Label } from "atoms";
import classNames from "classnames/bind";
import { Button } from "molecules";
import { DOTS, usePaginationRange } from "utils";

import { IPaginationProps } from "./Pagination.types";

const cx = classNames.bind(styles);

export const Pagination: React.FC<IPaginationProps> = ({
	disabled,
	defaultPage,
	pageCount = 1,
	onPageChange,
	hidePrevButton = false,
	hideNextButton = false,
	label,
	siblingCount = 0,
	buttonConst = 3, // buttonConst + 2 = number of buttons that will show constantly, without DOTS
	customQueryLabel = "page",
	className = "",
}) => {
	const [currentPage, setCurrentPage] = React.useState(defaultPage || 1);
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams(location.search);

	const paginationClassName = cx("Pagination", {
		[className]: className,
	});
	const paginationLabelClassName = cx("Pagination__Label");
	const paginationDotsClassName = cx("Pagination__Dots");

	const paginationRange = usePaginationRange({
		totalPageCount: pageCount,
		buttonConst,
		siblingCount,
		currentPage,
	});

	React.useEffect(() => {
		const currentPageParam = searchParams.get(customQueryLabel) || 1;
		handleSetPage(+currentPageParam);
	}, [pageCount]);

	const handleSetPage = (newPage: number | string): void => {
		const updatedPage = +newPage;

		if (updatedPage >= 1 && updatedPage <= pageCount) {
			setCurrentPage(updatedPage);
			setSearchParams({ [customQueryLabel]: `${newPage}` });
			onPageChange(updatedPage);
		}
	};

	return (
		<div className={paginationClassName}>
			{!!label && <div className={paginationLabelClassName}>{label}</div>}
			{!hidePrevButton && (
				<Button
					className={cx("Pagination__Button", {
						"Pagination__Button--Disabled":
							currentPage === 1 || disabled,
					})}
					type={Button.Type.GHOST}
					onClick={() => handleSetPage(currentPage - 1)}
					disabled={currentPage === 1 || disabled}
				>
					<Button.Icon
						color={Button.Icon.Color.MAIN_TEXT_COLOR}
						size={Button.Icon.Size.SMALL}
						type={Button.Icon.Type.CHEVRON_LEFT}
					/>
				</Button>
			)}
			{paginationRange?.map((item, index) => {
				if (item === DOTS) {
					const key = `${index}_${item}`;

					return (
						<Label
							key={key}
							size={Label.Size.SMALL}
							color={Label.Color.MAIN_TEXT_COLOR}
							className={paginationDotsClassName}
						>
							...
						</Label>
					);
				}

				return (
					<Button
						className={cx("Pagination__Button", {
							"Pagination__Button--Active": item === currentPage,
						})}
						type={Button.Type.GHOST}
						key={`page_${item}`}
						disabled={disabled}
						onClick={() => handleSetPage(item)}
					>
						<Button.Label
							size={Button.Label.Size.SMALL}
							color={Button.Label.Color.MAIN_TEXT_COLOR}
						>{`${item}`}</Button.Label>
					</Button>
				);
			})}
			{!hideNextButton && (
				<Button
					className={cx("Pagination__Button", {
						"Pagination__Button--Disabled":
							currentPage === pageCount || disabled,
					})}
					type={Button.Type.GHOST}
					onClick={() => handleSetPage(currentPage + 1)}
					disabled={currentPage === pageCount || disabled}
				>
					<Button.Icon
						size={Button.Icon.Size.SMALL}
						color={Button.Icon.Color.MAIN_TEXT_COLOR}
						type={Button.Icon.Type.CHEVRON_RIGHT}
					/>
				</Button>
			)}
		</div>
	);
};

Pagination.displayName = "Pagination";
